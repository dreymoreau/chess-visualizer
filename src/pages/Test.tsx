import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default function Test() {
  const chartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Data for the bar graph
    const data: number[] = [10, 20, 15, 25, 30];

    // Set up the SVG dimensions
    const svgWidth: number = 400;
    const svgHeight: number = 300;

    const svg = d3.select(chartRef.current)
      .attr('width', svgWidth)
      .attr('height', svgHeight);

    // Create scales
    const xScale = d3.scaleBand<number>()
      .domain(d3.range(data.length))
      .range([0, svgWidth])
      .paddingInner(0.1);

    const yScale = d3.scaleLinear<number, number>()
      .domain([0, d3.max(data) || 0])
      .range([0, svgHeight]);

    // Create bars
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (i) => xScale(i) || 0)
      .attr('y', (d) => svgHeight - (yScale(d) || 0))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => yScale(d) || 0)
      .attr('fill', 'skyblue');

    // Create labels
    svg.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text((d) => String(d))
      .attr('x', (i) => (xScale(i) || 0) + xScale.bandwidth() / 2)
      .attr('y', (d) => svgHeight - (yScale(d) || 0) + 15)
      .attr('text-anchor', 'middle')
      .attr('font-family', 'sans-serif')
      .attr('font-size', '12px')
      .attr('fill', 'black');
  }, []);

  return (
    <div>
      <svg ref={chartRef}></svg>
    </div>
  );
}