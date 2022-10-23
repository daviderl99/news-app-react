import React from 'react';
import axios from 'axios';

class App extends React.Component {

	state = {
		newsData : [],
	}

	componentDidMount() {

		let data;

		axios.get('http://localhost:8000/news/')
		.then(res => {
			data = res.data;
			this.setState({
				newsData : data	
			});
		})
		.catch(err => {})
	}

  render() {
    return(
    <div>
        {this.state.newsData.map((news, id) => (
          <div key={id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{news.date}</h6>
                <p className="card-text">{news.lead}</p>
                <p className="card-text">{news.text}</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
    );
  }
}

export default App;
