import React from 'react';
import './App.css';

function ProjectStructure() {
    return (
        <div className='folder-structure'>
            <p><b>Project Structure</b></p>
            <pre>
                <code>
                    my-react-app/<br/>
                    ├── src/<br/>
                    │   ├── components/<br/>
                    │   │   ├── AnimeList.jsx<br/>
                    │   │   ├── AnimeRanks.jsx<br/>
                    │   │   ├── ColorChanger.jsx<br/>
                    │   │   ├── ProjectStructure.jsx<br/>
                    │   │   └── Main.jsx<br/>
                    │   ├── App.css<br/>
                    ├── App.css<br/>
                    ├── Main.jsx<br/>
                    └── index.html<br/>
                </code>
            </pre>
        </div>
    );
}

export default ProjectStructure;
