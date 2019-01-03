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

const localRights = window.localStorage && window.localStorage.getItem('rights');

export class RightsList extends Component<{}, IRightsListState> {
  public readonly state = {
    rights: localRights ? JSON.parse(localRights) : [],
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
            rights.map((right: IRight, rightIndex: number) => {
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
          <p>There was an error loading the list, this is likely out of date.</p>
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
    return gapi.client.load("sheets", "v4", () => {
      gapi.client.sheets.spreadsheets.values
        .get({
          spreadsheetId: config.spreadsheetId,
          range: "RightsList!A2:B"
        })
        .then(
          (response: any) => {
            const data = response.result.values;
            const values = data.map((value: any) => {
              const points = value[1] && value[1].split(';');
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
        )
        .catch((error: any) => {
          console.error(error);
          this.setState({error})
        })
    });
  }

  private _onLoad = (data?: { values: IRight[] }, error?: boolean | null) => {
    if (data) {
      const { values } = data;
      this.setState({ rights: values });
      window.localStorage && window.localStorage.setItem('rights', JSON.stringify(values));
    } else {
      this.setState({ error })
    }
  }
}