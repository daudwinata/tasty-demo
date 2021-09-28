import React, { useState, useEffect } from 'react';
import DataSlider from '../../data-slider';

function HomepageSlider (props) {
    const [people, setPeople] = useState(DataSlider);
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
        setIndex(lastIndex);
        }
        if (index > lastIndex) {
        setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
        setIndex(index + 1);
        }, 5000);
        return () => {
        clearInterval(slider);
        };
    }, [index]);

    return (
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <img src="./images/arrow-left.png" alt="toggle" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <img src="../images/arrow-right.png" alt="toggle" />
        </button>
      </div>
    )
}

export default HomepageSlider;