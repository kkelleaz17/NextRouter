import React from 'react'
import styles from "./page.module.css";

export default function page() {
  return (
    <main className={styles.main}>
      <h1 className={styles.Header}>JS Projects</h1>

      <div className={styles.HOLDER}>


        <a className={styles.BOX} href="https://kkelleaz17.github.io/Api-React/" target="_blank">
          <img src="./Media/Movie.PNG" />
          <h1>Movie API</h1>
        </a>

        <a className={styles.BOX} href="https://kkelleaz17.github.io/RandomizedGame/" target="_blank">
          <img src="./Media/Game.PNG" />
          <h1>Game</h1>
        </a>
        <a className={styles.BOX} href="https://kkelleaz17.github.io/Calculator/" target="_blank">
          <img src="./Media/Cal.PNG" />
          <h1>Calculator</h1>
        </a>
        <a className={styles.BOX} href="https://kkelleaz17.github.io/TODO/" target="_blank">
          <img src="./Media/TODO.PNG" />
          <h1>Todo</h1>
        </a>
       
        <a className={styles.BOX} href=" https://kkelleaz17.github.io/JsCalender/" target="_blank">
          <img src="./Media/Calender.PNG" />
          <h1>Calender</h1>
        </a>
        <a className={styles.BOX} href="https://kkelleaz17.github.io/JSGuessGame/" target="_blank">
          <img src="./Media/JSGUESSGAME.PNG" />
          <h1>JS Guessing game</h1>
        </a>
        <a className={styles.BOX} href=" https://kkelleaz17.github.io/Snake/" target="_blank">
          <img src="./Media/SNAKE.PNG" />
          <h1>Snake</h1>
        </a>


        <a className={styles.BOX} href="https://kkelleaz17.github.io/QuizApp/" target="_blank">
          <img src="./Media/Quiz.PNG" />
          <h1>Quiz</h1>
        </a>
       </div>


       <h1 className={styles.Header}>CSS Projects</h1>

       <div className={styles.HOLDER}>


        <a className={styles.BOX} href="https://kkelleaz17.github.io/Animation/" target="_blank">
          <img src="./Media/AnimationPNG.PNG" />
          <h1>Animation</h1>
        </a>


        <a className={styles.BOX} href="https://kkelleaz17.github.io/Bootstrap-5/" target="_blank">
          <img src="./Media/bootstrap.PNG" />
          <h1>Bootstrap-5</h1>
        </a>
        <a className={styles.BOX} href="https://kkelleaz17.github.io/FlexBoxRecreate/" target="_blank">
          <img src="./Media/flex.PNG" />
          <h1>FlexBox</h1>
        </a>
      
        <a className={styles.BOX} href="https://kkelleaz17.github.io/Resume/" target="_blank">
          <img src="./Media/resume.PNG" />
          <h1>Resume</h1>
        </a>
        <a className={styles.BOX} href="https://kkelleaz17.github.io/TravelAgency/" target="_blank">
          <img src="./Media/Travel.PNG" />
          <h1>Jquery</h1>
        </a>
       
        <a className={styles.BOX} href="https://kkelleaz17.github.io/Filters/" target="_blank">
          <img src="./Media/filters.PNG"/>
          <h1>CSS filters</h1>
        </a>


        <a className={styles.BOX} href="https://kkelleaz17.github.io/CARDANIMATION/" target="_blank">
          <img src="./Media/CARDANIMATION.PNG" />
          <h1>Card animation</h1>
        </a>
       

      </div>
      <h1 className={styles.Header}>HTML Projects</h1>
      <div className={styles.HOLDER}>
        <a className={styles.BOX} href="https://kkelleaz17.github.io/Red-Ball-Pizza/" target="_blank">
          <img src="./Media/RedBall.PNG" />
          <h1>RedBall Pizza</h1>
        </a>
        <a className={styles.BOX} href="https://kkelleaz17.github.io/SvgfILTER/" target="_blank">
          <img src="./Media/FILTER.PNG" />
          <h1>SVG filter</h1>
        </a>
      </div>
    </main>
  )
}
