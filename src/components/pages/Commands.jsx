import '../App.css'
import '../styles/Pages.css'
import command from '../images/command.png';

function Commands() {

  return (
    <>
    <div className="container-wrapper">

  
     <div className='main-container'>

     <div className='guide'>
            <p><b>How to Use Commands</b></p><br />
            <p>To use Commands, you enter a valid Command keywords. The terminal then executes the command as entered and performs the task or function it's designed to perform in Website.</p><br />
            <p>Commands must be entered into the Terminal exactly. The wrong syntax or a misspelling could cause the command to fail or worse; it could execute the wrong command or the right command in the wrong way.</p>
        </div>
    
      
     </div>
     <div className='main-container-command'>

     <div className='command1'>
            <p><b>Commands</b></p>
            <pre>
                <code>
                  <p><b>about</b></p>
                  <p><b>version</b></p>
                  <p><b>help</b></p>
                  <p><b>clear</b></p>
                  <p><b>social</b></p>
                  <p><b>tree</b></p>
                  <p><b>color</b></p>
                  <p><b>social</b></p>
                  <p><b>anime-rank</b></p>
                  <p><b>anime-list</b></p>
                  <p><b>kdrama-list</b></p>
                  <p><b>kdrama-rank</b></p>
                  <p><b>kdrama-random</b></p>
                  <p><b>api</b></p>
                  <p><b>weather</b></p>
                  <p><b>weather-location</b></p>
                </code>
            </pre>
        </div>
     <div className='command2'>
            <p><b>Descriptions</b></p>
            <pre>
                <code>
                <p>Display website Information</p>
                <p>Versions and Change Logs</p>
                <p>Versions and Change Logs</p>
                <p>Clears the prompt</p>
                <p>Visit some links</p>
                <p>Displays Project Structure</p>
                <p>Change text color</p>
                <p>Visit some links</p>
                <p>Displays Top Animes</p>
                <p>Displays Ongoing Anime this season</p>
                <p>Displays Kdrama</p>
                <p>Displays Kdrama based on ratings</p>
                <p>Displays random Kdrama</p>
                <p>Displays api used</p>
                <p>Displays Weather</p>
                <p>Displays Weather in Specific Location</p>
                </code>
            </pre>
        </div>
  
      
     </div>
     <div className='main-container'>

     <div className='guide'>
            <p><b>Examples and Usage</b></p><br />
            <p>To fetch an anime list rankings, simply type 'anime-rank'. For the latest anime releases, use the command 'anime-list' 
              to instantly retrieve the most recent additions to our database. Similarly, if you're in the mood for Kdrama movies, enter 
              'kdrama-list' to access a curated selection of the latest and greatest Korean dramas on offer. With these commands at your fingertips, 
              discovering your next favorite show has never been easier! So go ahead, explore to your heart's content, and dive into the captivating 
              worlds of anime and Kdrama.</p>
            
        </div>
      
     </div>
     </div>
    </>
  )
}

export default Commands
