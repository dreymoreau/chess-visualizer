import * as React from 'react';
import * as d3 from 'd3';
import { useRef, useEffect } from 'react';

interface DataVisualizationProps {
  data: number[];
  width?: number;
  height?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}

const DataVisualization: React.FC<DataVisualizationProps> = ({
  data,
  width = 640,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 30,
  marginLeft = 40,
}) => {
  const gx = useRef<SVGGElement>(null);
  const gy = useRef<SVGGElement>(null);
  const x = d3.scaleLinear().domain([0, data.length - 1]).range([marginLeft, width - marginRight]);
  const y = d3.scaleLinear().domain(d3.extent(data) || [0, 1]).range([height - marginBottom, marginTop]);
  const line = d3.line<number>().x((d, i) => x(i)).y((d) => y(d));

  useEffect(() => {
    if (gx.current) d3.select(gx.current).call(d3.axisBottom(x));
  }, [gx, x]);

  useEffect(() => {
    if (gy.current) d3.select(gy.current).call(d3.axisLeft(y));
  }, [gy, y]);

  return (
    <svg width={width} height={height}>
      <g ref={gx} transform={`translate(0,${height - marginBottom})`} />
      <g ref={gy} transform={`translate(${marginLeft},0)`} />
      <path fill="none" stroke="currentColor" strokeWidth={1.5} d={line(data) || ''} />
      <g fill="white" stroke="currentColor" strokeWidth={1.5}>
        {data.map((d, i) => (
          <circle key={i} cx={x(i) || 0} cy={y(d) || 0} r={2.5} />
        ))}
      </g>
    </svg>
  );
};


export default DataVisualization;