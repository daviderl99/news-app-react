import { React, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Form from '../components/Form';
import '../css/ViewNews.css';

const ViewNews = () => {
  const [newsData, setNewsData] = useState([]);
  const showForm = useRef(false);;

	useEffect(() => {
		let data;

		axios.get('http://localhost:8000/news/')
		.then(res => {
			data = res.data;
			setNewsData(data);
		})
		.catch(err => {})
	}, []);

  const addNewsItem = (newsItem) => {
    setNewsData([...newsData, newsItem]);
    toggleForm();
  }

  const toggleForm = () => {
    showForm.current = !showForm.current;
    console.log(showForm);
  }

  return(
    <div>
      {showForm === false &&
        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={toggleForm}
        >
          Add news item
        </button>
      }
      {showForm === true &&
        <Form addNewsItem={addNewsItem} />
      }
      {newsData.map((news, id) => (
        <div key={id}>
          <Link to={`/edit/${id+1}`} className="card m-3">
            <div className="card-body">
              <h3 className="card-title">{news.title}</h3>
              <h5 className="card-subtitle mb-2 text-muted">{news.date}</h5>
              <b className="card-text">{news.lead}</b>
              <p className="card-text">{news.text}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ViewNews;
