import React, { useContext } from 'react'
import UserHeader from '../components/UserHeader'
import { useHistory } from 'react-router'
import { userContext } from '../components/UserContext'

export default function Home() {
  const { user, setUser, setAlert } = useContext(userContext)
  const history = useHistory()

  const handleBoardChange = (e: React.MouseEvent<SVGElement>) => {
    document.querySelector("#home > nav > svg.selected").classList.remove("selected")
    e.currentTarget.classList.add("selected")
  }

  const logout = () => {
    history.push("/")
  }

  const fakeTickets = [
    { id: 1, title: "Login issue", status: "Open", description: "Unable to log in with my credentials.", priority: "High" },
    { id: 2, title: "Password reset", status: "Closed", description: "Request for password reset link.", priority: "Medium" },
    { id: 3, title: "Bug in dashboard", status: "In Progress", description: "Dashboard crashes when accessing analytics.", priority: "High" },
    { id: 4, title: "UI feedback", status: "Open", description: "Suggestions for improving the navigation bar.", priority: "Low" },
    { id: 4, title: "UI feedback", status: "Open", description: "Suggestions for improving the navigation bar.", priority: "Low" },
    { id: 4, title: "UI feedback", status: "Open", description: "Suggestions for improving the navigation bar.", priority: "Low" },
    { id: 4, title: "UI feedback", status: "Open", description: "Suggestions for improving the navigation bar.", priority: "Low" },
    { id: 4, title: "UI feedback", status: "Open", description: "Suggestions for improving the navigation bar.", priority: "Low" },
    { id: 4, title: "UI feedback", status: "Open", description: "Suggestions for improving the navigation bar.", priority: "Low" },
    { id: 4, title: "UI feedback", status: "Open", description: "Suggestions for improving the navigation bar.", priority: "Low" },
    { id: 4, title: "UI feedback", status: "Open", description: "Suggestions for improving the navigation bar.", priority: "Low" },
    { id: 4, title: "UI feedback", status: "Open", description: "Suggestions for improving the navigation bar.", priority: "Low" },
    { id: 4, title: "UI feedback", status: "Open", description: "Suggestions for improving the navigation bar.", priority: "Low" },
    { id: 4, title: "UI feedback", status: "Open", description: "Suggestions for improving the navigation bar.", priority: "Low" },
  ];

  return (
    <div id='home'>
      <nav>
        {
          user.type == "worker" ?
          <>
            <svg id="ticket" className='selected' onClick={handleBoardChange} xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" fill="#000000" version="1.1" viewBox="0 0 457.208 457.208"><g><g><g><path d="M442.468,196.301c8.182-0.142,14.74-6.814,14.74-14.998v-72.778c0-8.284-6.716-15-15-15H15c-8.284,0-15,6.716-15,15v72.768c0,3.996,1.595,7.828,4.431,10.644c2.835,2.815,6.652,4.387,10.675,4.356c0.158-0.002,0.315-0.005,0.478-0.01c17.732,0.105,32.125,14.564,32.125,32.321c0,17.764-14.405,32.226-32.146,32.32c-0.148-0.004-0.297-0.007-0.447-0.009c-0.039,0-0.077,0-0.116,0c-3.957,0-7.755,1.563-10.565,4.353C1.596,268.084,0,271.917,0,275.915v72.768c0,8.284,6.716,15,15,15h427.208c8.284,0,15-6.716,15-15v-72.778c0-8.183-6.559-14.855-14.74-14.998c-17.507-0.303-31.749-14.794-31.749-32.303C410.719,211.095,424.961,196.603,442.468,196.301z M381.396,300.513c0,8.284-6.716,15-15,15H90.813c-8.284,0-15-6.716-15-15v-143.82c0-8.284,6.716-15,15-15h275.583c8.284,0,15,6.716,15,15V300.513z"/><rect x="105.813" y="171.693" width="159.396" height="113.82"/><rect x="295.208" y="171.693" width="56.188" height="113.82"/></g></g></g></svg>
          </>
          :
          <>
            <svg id='overview' onClick={handleBoardChange} className='selected' width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/></svg>
            <svg id='workers' onClick={handleBoardChange} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 16V14.0003M10 14.0003V12M10 14.0003L12 14.0005M10 14.0003L8 14M21 12V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.71569 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H3M21 12V16M21 12H19C17.8954 12 17 12.8954 17 14C17 15.1046 17.8954 16 19 16H21M21 16V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8V8M18 8V7.2C18 6.0799 18 5.51984 17.782 5.09202C17.5903 4.71569 17.2843 4.40973 16.908 4.21799C16.4802 4 15.9201 4 14.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V8" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <svg id='configs' onClick={handleBoardChange} xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24"stroke-width="2"stroke-linecap="round"stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>
          </>
        }
        <svg id='logout' onClick={logout} fill="#000000" height="800px" width="800px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.971 384.971"><g><g id="Sign_Out"><path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03C192.485,366.299,187.095,360.91,180.455,360.91z"/><path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"/></g></g></svg>
      </nav>
      <div>
        <UserHeader>
        </UserHeader>
        <main id='dashboard'>
          <div id='tools'>
            <button>Criar um chamado</button>
            <input type="text" placeholder='Filtrar' />
          </div>
          <div id='tickets' className='scrollable'>
          {fakeTickets.map(ticket => (
                <div key={ticket.id} className='ticket'>
                  <div>
                    <h3 style={{ margin: 0 }}>{ticket.title}</h3>
                    <span>21/09/2024</span>
                  </div>
                  <p style={{ margin: "5px 0" }}>{ticket.priority}</p>
                  <p style={{ margin: "5px 0" }}>{ticket.description}</p>
                  <div className='tags'>
                    <span className='tag'>Teste</span>
                    <span className='tag'>Teste</span>
                    <span className='tag'>Teste</span>
                    <span className='more'>+</span>
                  </div>
                </div>
              ))}
          </div>
        </main>
      </div>
    </div>
  )
}
