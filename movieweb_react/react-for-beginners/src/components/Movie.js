import PropTypes from "prop-types";

export default function Movie({title,coverImg,summary,genres}) {
  return (
      <>
        <h2>{title}</h2>
        <img src={coverImg} alt={title}/>
        <p>{summary}</p>
        <ul>
          {genres.map((g) => <li key={g}>{g}</li>)}
        </ul>
      </>
  )
}

Movie.prototype = {
  coverImg : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
}