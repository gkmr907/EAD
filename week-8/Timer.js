import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [active]);




  return (
    <div>
      <h1>{seconds} seconds</h1>
      <button onClick={() => setActive(true)}>Start</button>
      <button onClick={() => setActive(false)}>Stop</button>
      <button onClick={() => { setActive(false); setSeconds(0); }}>Reset</button>
    </div>
  );
}

export default Timer;





// ```jsx
// import React, { useState, useEffect } from 'react';
// ```

// * This line imports React and two special hooks — **useState** and **useEffect** — which help us manage state and side effects in functional components.

// ---

// ```jsx
// function Timer() {
// ```

// * This defines a React **component** named `Timer`. A component is like a reusable piece of UI.

// ---

// ```jsx
//   const [seconds, setSeconds] = useState(0);
// ```

// * Here, you create a **state variable** called `seconds` with an initial value of `0`.
// * `setSeconds` is a function you can call to change the value of `seconds`.
// * Think of `seconds` as the current timer count.

// ---

// ```jsx
//   const [active, setActive] = useState(false);
// ```

// * Another state variable `active` is created to track if the timer is running (`true`) or stopped (`false`).
// * Starts as `false` because the timer is initially stopped.
// * `setActive` lets you change whether the timer is active or not.

// ---

// ```jsx
//   useEffect(() => {
// ```

// * This **hook** lets you run some code **after the component renders**.
// * You use this here to start or stop the timer interval based on the `active` state.

// ---

// ```jsx
//     if (!active) return;
// ```

// * If the timer is NOT active (`active` is `false`), this stops running the effect early and does nothing.

// ---

// ```jsx
//     const interval = setInterval(() => {
//       setSeconds(s => s + 1);
//     }, 1000);
// ```

// * If the timer is active, this creates a **timer** that runs every 1000 milliseconds (1 second).
// * Every second, it updates the `seconds` state by adding 1.
// * `setSeconds(s => s + 1)` means: take the previous seconds value `s`, and increase it by 1.

// ---

// ```jsx
//     return () => clearInterval(interval);
// ```

// * This is a **cleanup function**.
// * React calls it to clear (stop) the interval timer before the component unmounts or before running this effect again.
// * This prevents multiple timers running simultaneously and avoids memory leaks.

// ---

// ```jsx
//   }, [active]);
// ```

// * The `useEffect` will **re-run only when `active` changes**.
// * So if you start or stop the timer, this effect responds accordingly.

// ---

// ```jsx
//   return (
//     <div>
//       <h1>{seconds} seconds</h1>
//       <button onClick={() => setActive(true)}>Start</button>
//       <button onClick={() => setActive(false)}>Stop</button>
//       <button onClick={() => { setActive(false); setSeconds(0); }}>Reset</button>
//     </div>
//   );
// ```

// * This is the **UI** part the user sees:

//   * Shows the current seconds count inside an `<h1>`.
//   * A **Start** button — when clicked, it sets `active` to `true` (starts timer).
//   * A **Stop** button — when clicked, sets `active` to `false` (stops timer).
//   * A **Reset** button — stops the timer AND sets seconds back to zero.

// ---

// ```jsx
// }

// export default Timer;
// ```

// * Ends the component.
// * `export default Timer;` makes this component available for use in other files.

// ---

// ### Summary

// * You keep track of **seconds** and whether the timer is **active**.
// * When active, a timer runs every second and increases the seconds count.
// * You can start, stop, and reset the timer using buttons.


