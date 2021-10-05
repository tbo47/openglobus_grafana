import { PanelProps } from '@grafana/data';
import * as og from '@openglobus/og';
import React from 'react';
import 'og.css';
import 'styles.css';
import { SimpleOptions } from 'types';

interface Props extends PanelProps<SimpleOptions> { }

let globus;

const initMap = () => {
  const url = '//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const osm = new og.layer.XYZ('OpenStreetMap', { url });
  const terrain = new og.terrain.GlobusTerrain();
  globus = new og.Globe({ target: 'globus', terrain, layers: [osm] });
  globus.planet.flyLonLat(new og.LonLat(55, 37, 20108312));
};

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  setTimeout(() => initMap(), 500);
  return <div id="globus" className="globus"></div>;
};
