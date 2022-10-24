import React from 'react';
import axios from 'axios';
import Form from './components/Form/Form';
import './App.css';

class App extends React.Component {

	state = {
		newsData: [],
    showForm: false,
	}

	componentDidMount() {
		let data;

		axios.get('http://localhost:8000/news/')
		.then(res => {
			data = res.data;
			this.setState({
				newsData: data	
			});
		})
		.catch(err => {})
	}

  addNewsItem = (newsItem) => {
    this.setState({
      newsData: [...this.state.newsData, newsItem]
    });
    this.toggleForm();
  }

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  render() {
    return(
      <div>
        {this.state.showForm === false &&
          <button
            type="button"
            className="btn btn-primary m-3"
            onClick={this.toggleForm}
          >
            Add news item
          </button>
        }
        {this.state.showForm === true &&
          <Form addNewsItem={this.addNewsItem} />
        }
        {this.state.newsData.map((news, id) => (
          <div key={id}>
            <div className="card m-3">
              <div className="card-body">
                <h3 className="card-title">{news.title}</h3>
                <h5 className="card-subtitle mb-2 text-muted">{news.date}</h5>
                <b className="card-text">{news.lead}</b>
                <p className="card-text">{news.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
