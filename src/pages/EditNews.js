import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditNews = () => {
  const [newsData, setNewsData] = useState({
    title: '',
    date: '',
    lead: '',
    text: '',
  });
  const { id } = useParams();

  useEffect(() => {
		let data;

		axios.get(`http://localhost:8000/news/${id}`)
		.then(res => {
			data = res.data;
			setNewsData(data);
		})
		.catch(err => {})
	}, [id]);

  const handleInput = (e) => {
    setNewsData({
      ...newsData, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // axios.post("http://localhost:8000/edit/", {
    //     title: newsData.title,
    //     date: newsData.date,
    //     lead: newsData.lead,
    //     text: newsData.text,
    //   })
    //   .catch((err) => {});
  }

  return (
    <form onSubmit={handleSubmit} className='form m-3'>
      <div className="form-group">
        <input
          value={newsData.title}
          onChange={handleInput}
          type="text" name="title"
          className="form-control"
          placeholder="Title" required />

        <input
          value={newsData.date}
          onChange={handleInput}
          type="date" name="date"
          className="form-control"
          placeholder="Date" required />
  
        <input
          value={newsData.lead}
          onChange={handleInput}
          type="text" name="lead"
          className="form-control"
          placeholder="Lead" />
  
        <input
          value={newsData.text}
          onChange={handleInput}
          type="text" name="text"
          className="form-control"
          placeholder="Text" required />
      </div>
      <button type="submit" className="btn btn-primary">Update news</button>
    </form>
  );
}

export default EditNews;
