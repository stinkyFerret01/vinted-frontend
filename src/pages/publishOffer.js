import { useState } from "react";
import axios from "axios";

const PublishOffer = ({ ...pack }) => {
  const [publishData, setPublishData] = useState({});
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(publishData);
    console.log(pack.token);

    const formData = new FormData();
    formData.append("picture", publishData.picture);
    formData.append("title", publishData.title);
    formData.append("description", publishData.description);
    formData.append("brand", publishData.brand);
    formData.append("size", Number(publishData.size));
    formData.append("color", publishData.color);
    formData.append("condition", publishData.conditon);
    formData.append("city", publishData.city);
    formData.append("price", Number(publishData.price));
    console.log(publishData.title);
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: "Bearer " + pack.token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(JSON.stringify(response.data));
    } catch (err) {
      if (err.response.status === 500) {
        console.error("An error occurred");
      } else {
        console.error(err.response);
      }
    }
  };

  return (
    <section className="fullPage">
      <h1>Publish !!</h1>
      <article>
        <form className="publishOffer" onSubmit={handleSubmit}>
          <input
            className="formInput"
            type="file"
            placeholder="dékri ton nobjet"
            onChange={(event) => {
              const stepPublishData = { ...publishData };
              stepPublishData.picture = event.target.files[0];
              setPublishData(stepPublishData);
            }}
          />
          <input
            className="formInput"
            type="text"
            value={publishData.title}
            placeholder="title"
            onChange={(event) => {
              const stepPublishData = { ...publishData };
              stepPublishData.title = event.target.value;
              setPublishData(stepPublishData);
            }}
          />
          <input
            className="formInput"
            type="text"
            value={publishData.description}
            placeholder="dékri ton nobjet"
            onChange={(event) => {
              const stepPublishData = { ...publishData };
              stepPublishData.description = event.target.value;
              setPublishData(stepPublishData);
            }}
          />
          <input
            className="formInput"
            type="text"
            value={publishData.brand}
            placeholder="la marque de ton truc"
            onChange={(event) => {
              const stepPublishData = { ...publishData };
              stepPublishData.brand = event.target.value;
              setPublishData(stepPublishData);
            }}
          />
          <input
            className="formInput"
            type="text"
            value={publishData.size}
            placeholder="genre ‘44‘"
            onChange={(event) => {
              const stepPublishData = { ...publishData };
              stepPublishData.size = event.target.value;
              setPublishData(stepPublishData);
            }}
          />
          <input
            className="formInput"
            type="text"
            value={publishData.color}
            placeholder="color of ze object"
            onChange={(event) => {
              const stepPublishData = { ...publishData };
              stepPublishData.color = event.target.value;
              setPublishData(stepPublishData);
            }}
          />
          <input
            className="formInput"
            type="text"
            value={publishData.condition}
            placeholder="watiz ze condichione of ze object"
            onChange={(event) => {
              const stepPublishData = { ...publishData };
              stepPublishData.condition = event.target.value;
              setPublishData(stepPublishData);
            }}
          />
          <input
            className="formInput"
            type="text"
            value={publishData.city}
            placeholder="waire douyou live?"
            onChange={(event) => {
              const stepPublishData = { ...publishData };
              stepPublishData.city = event.target.value;
              setPublishData(stepPublishData);
            }}
          />
          <input
            className="formInput"
            type="text"
            value={publishData.price}
            placeholder="price"
            onChange={(event) => {
              const stepPublishData = { ...publishData };
              stepPublishData.price = event.target.value;
              setPublishData(stepPublishData);
            }}
          />
          <input className="formInput" type="Submit" value="submit" />
        </form>
        <p>{publishData.price}</p>
        <p>{publishData.title}</p>
        <p>{publishData.description}</p>
        <p>{publishData.size}</p>
        <p>{publishData.brand}</p>
        <p>{publishData.condition}</p>
        <p>{publishData.city}</p>
        <p>{publishData.color}</p>
      </article>
    </section>
  );
};

export default PublishOffer;
