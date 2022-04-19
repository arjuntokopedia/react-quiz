import { useRef, useEffect } from 'react';

import Planet from './Planet.class';
import { cssSpace } from './style';
import { getRandomColor, randomIntFromRange } from './utils';

const ORBIT_RADIUS_MULTIPLIER = 65;

const Solar = ({ planetNumber }) => {
  const canvasRef = useRef();

  const getPlanet = (canvas, radius, velocity, orbitRadius, color) =>
    new Planet(
      canvas.width / 2,
      canvas.height / 2,
      radius,
      color,
      velocity / 1000,
      orbitRadius
    );

  useEffect(() => {
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
  }, []);

  // Animation Loop
  function animate(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;
    const planets = [];

    planets.push(getPlanet(canvas, 35, 0, 0, 'yellow')); // sun

    for (let i = 0; i < planetNumber; i++) {
      planets.push(
        getPlanet(
          canvas,
          randomIntFromRange(5, 20),
          randomIntFromRange(1, 5),
          ORBIT_RADIUS_MULTIPLIER * (i + 1),
          getRandomColor()
        )
      );
    }

    const render = () => {
      animationFrameId = window.requestAnimationFrame(render);
      animate(context, canvas);
      planets.forEach((planet) => {
        planet.update(context);
      });
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [animate]);

  return (
    <div className={cssSpace}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Solar;
