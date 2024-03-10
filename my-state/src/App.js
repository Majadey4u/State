import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Maryjane Ogbuju',
      bio: '  This is my Profile, I am a student of GMC',
      imgSrc: '/IM4.JPG',
      profession: 'Software Engineer'
    },
    show: false,
    mountedTime: null
  };

  componentDidMount() {
    this.setState({ mountedTime: new Date() });
    this.interval = setInterval(() => {
      this.setState({ mountedTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div className="App">
        <h1>My Person Profile</h1>
        <button onClick={this.toggleProfile}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {show && (
          <div>
            <img src={imgSrc} alt="Profile" />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <p>Time since mounted: {new Date() - mountedTime} ms</p>
      </div>
    );
  }
}

export default App;
