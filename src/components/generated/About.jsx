function About() {

    const ReactJS = <span style={{ color: '#007ACC' }}>React JS</span>;
    const ReactApi = <span style={{ color: '#007ACC' }}>APIs</span>;

    return (
        <>
            <div className='response'>
                <h4 className='centered-text'>Welcome to Togechi-san Terminal!</h4>
                <p>This website is created using {ReactJS} and some {ReactApi}. It provides a simple and fun command-lines for various tasks.</p>
                <br />
                <p>Features: </p>
                <p>&nbsp; - Type commands just for fun</p>
                <p>&nbsp; - Uses API to fetch data </p>
            </div>
        </>
    );
}

export default About
