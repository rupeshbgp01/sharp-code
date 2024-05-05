import {React,useEffect} from "react";
import "./compete.css";

export default function Compete() {
    useEffect(() => {
        const countdownSpan = document.getElementById('countdown');
        const targetDate = new Date('2024-05-05T20:00:00').getTime();
        const countdownInterval = setInterval(() => {
          const now = new Date().getTime();
          const distance = targetDate - now;
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          countdownSpan.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
          if (distance < 0) {
            clearInterval(countdownInterval);
            countdownSpan.innerHTML = 'Contest has started!';
          }
        }, 1000);
        return () => clearInterval(countdownInterval);
      }, []);
  return (
    <div className="compete">
      <div className="intro">
        <h1>What Are Contests?</h1>
        <hr />
        <p>
          Contests are weekly global coding competitions held on Wednesdays.
          These Contests are called Starters. When you participate in rated
          contests, you improve your CodeChef rating that reflect on your
          profile. Coders start with 0* and can reach all the way till 7* as
          they participate more and more in contests. To improve your
          performance in Contests you can use CodeChef’s own resources like
          Learn, Practice or upsolve old rated contest problems.
        </p>
      </div>
      <div className="ongoing">
        <h1>Ongoing Contests</h1>
        <hr />
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Start</th>
              <th>Duration</th>
              <th>Starts in</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Contest1_Code</td>
              <td>Contest1_Name</td>
              <td>Contest1_Start</td>
              <td>Contest1_Duration</td>
              <td>Contest1_StartsIn</td>
            </tr>
            <tr>
              <td>Contest2_Code</td>
              <td>Contest2_Name</td>
              <td>Contest2_Start</td>
              <td>Contest2_Duration</td>
              <td>Contest2_StartsIn</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="upcoming">
        <h1>upcoming Contests</h1>
        <hr />
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Start</th>
              <th>Duration</th>
              <th>Starts in</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Contest1_Code</td>
              <td>Contest1_Name</td>
              <td>Contest1_Start</td>
              <td>Contest1_Duration</td>
              <td>Contest1_StartsIn</td>
            </tr>
            <tr>
              <td>Contest2_Code</td>
              <td>Contest2_Name</td>
              <td>Contest2_Start</td>
              <td>Contest2_Duration</td>
              <td><span id="countdown"></span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="past">
        <h1>Past Contests</h1>
        <hr />
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Start</th>
              <th>Duration</th>
              <th>Starts in</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Contest1_Code</td>
              <td>Contest1_Name</td>
              <td>Contest1_Start</td>
              <td>Contest1_Duration</td>
              <td>Contest1_StartsIn</td>
            </tr>
            <tr>
              <td>Contest2_Code</td>
              <td>Contest2_Name</td>
              <td>Contest2_Start</td>
              <td>Contest2_Duration</td>
              <td>Contest2_StartsIn</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
