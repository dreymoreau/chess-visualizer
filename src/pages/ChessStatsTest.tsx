import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

const ChessStatsTest: React.FC<{ username: string }> = ({ username }) => {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    // Fetch data from Chess.com API and update 'stats'
    // ...

    // For demonstration purposes, a sample structure similar to the expected stats is created here
    const sampleStats = {
      chess_rapid: { win: 40, loss: 20 },
      chess_blitz: { win: 50, loss: 30 },
      chess_bullet: { win: 60, loss: 40 },
    };

    setStats(sampleStats);
  }, []);

  useEffect(() => {
    if (stats) {
      const { chess_rapid, chess_blitz, chess_bullet } = stats;

      const data = [
        { gameType: 'Rapid', win: chess_rapid.win, loss: chess_rapid.loss },
        { gameType: 'Blitz', win: chess_blitz.win, loss: chess_blitz.loss },
        { gameType: 'Bullet', win: chess_bullet.win, loss: chess_bullet.loss },
      ];

      // D3 visualization code
      const width = 500;
      const height = 300;

      const svg = d3.select('#chartContainer')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

      const stack = d3.stack()
        .keys(['win', 'loss'])
        .order(d3.stackOrderNone)
        .offset(d3.stackOffsetNone);

      const stackedData = stack(data);

      const xScale = d3.scaleBand()
        .domain(data.map(d => d.gameType))
        .range([0, width])
        .padding(0.1);

      const yScale = d3.scaleLinear()
        .domain([0, d3.max(stackedData, d => d3.max(d, layer => layer[1]))])
        .nice()
        .range([height, 0]);

      const color = d3.scaleOrdinal()
        .domain(['win', 'loss'])
        .range(['lightblue', 'salmon']);

      svg.selectAll('g')
        .data(stackedData)
        .join('g')
        .attr('fill', d => color(d.key))
        .selectAll('rect')
        .data(d => d)
        .join('rect')
        .attr('x', (d, i) => xScale(data[i].gameType) || 0)
        .attr('y', d => yScale(d[1]))
        .attr('height', d => yScale(d[0]) - yScale(d[1]))
        .attr('width', xScale.bandwidth());

      // Add axes, labels, and other necessary elements here
    }
  }, [stats]);

  return (
    <div id="chartContainer">
      {/* SVG for D3 visualization */}
      <svg id="chartSvg" />
    </div>
  );
};

export default ChessStatsTest;