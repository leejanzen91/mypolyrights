import React, { Component } from 'react';
import { config } from '../../utilities/index';

import {Root, Right} from './RightsList.styles';

const gapi: any = (window as any).gapi;

interface IRight {
  right: string;
  points?: string[];
}

export interface IRightsListState {
  rights: IRight[];
  error?: boolean | null
}

export class RightsList extends Component<{}, IRightsListState> {
  public readonly state = {
    rights: [],
    error: null
  }

  public componentDidMount() {
    gapi && gapi.load("client", this._initClient);
  }

  public render(): JSX.Element {
    const { rights, error } = this.state;
    if (rights && rights.length > 0) {
      return (
        <Root>
          {
            rights.map((right: IRight, rightIndex) => {
              const points = right.points;
              return (
                <Right key={rightIndex}>
                  <span>{right.right}</span>
                  {points && points.length > 0 && (
                    <ul>
                      {points.map((point: string, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  )}
                </Right>
              )
            })
          }
        </Root>
      )
    } else {
      return !error ? <div>Loading...</div> : (
        <Root>
          <Right>The right to not be discriminated against for:
              <ul>
              <li>Housing</li>
              <li>Jobs</li>
              <li>Health care</li>
            </ul>
          </Right>
          <Right>The right to marry</Right>
          <Right>The right to raise children and not lose them to CPS and court custody cases</Right>
          <Right>The right to specify our partners as medical caregivers</Right>
          <Right>The right for multiple relationships to be treated with the same weight and seriousness we grant them, and not as a "kinky sex thing"</Right>
          <Right>The right to be public with how we live our lives without fear</Right>
          <Right>The social right to not be the target of assault, physical or sexual due to our relationship orientation</Right>
        </Root>
      );
    }
  }

  private _initClient = () => {
    gapi && gapi.client
      .init({
        apiKey: config.apiKey,
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        this._loadRights();
      })
      .catch((error: any) => {
        console.error(error.error);
        this.setState({error: error.error})
      });
  }

  private _loadRights = () => {
    gapi && gapi.client.load("sheets", "v4", () => {
      gapi.client.sheets.spreadsheets.values
        .get({
          spreadsheetId: config.spreadsheetId,
          range: "Sheet1!A2:B1000"
        })
        .then(
          (response: any) => {
            const data = response.result.values;
            const values = data.map((value: any) => {
              const points = value[1].split(';');
              return {
                right: value[0],
                points,
              }
            }) || [];
            this._onLoad({ values });
          },
          (response: any) => {
            this._onLoad(undefined, response.result.error);
          }
        );
    });
  }

  private _onLoad = (data?: { values: IRight[] }, error?: boolean | null) => {
    if (data) {
      const { values } = data;
      this.setState({ rights: values });
    } else {
      this.setState({ error })
    }
  }
}