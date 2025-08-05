import seriesData from "../api/seriesData.json";

const Header = () => {
  return <h1>List of Series</h1>;
};

export default Header;

export const NetflixCards = () => {
  //varibales
  //   const age = 20;

  //   let canWatch = "Not Available";

  //   if(age>=18) canWatch = "Watch Now"

  //   const name = "Narcos Series";
  //   const rating = "4.8";
  //   const summary =
  //     "this is one the best series to be watched. Character in these movies are the best ones! Must Watch this";

  //   const returnGenre = () => {
  //     const genre = "comedy";

  //     return genre;
  //   };

  return (
    <ul>

      {seriesData.map((curr) => {
        return(<li key={curr.id}>
          
            <div>
              <img src={curr.img_url} width="35%" height="35%" />
            </div>

            <h1>Name: {curr.name}</h1>
            <h2>Rating: {curr.rating}</h2>
            <p> Summary: {curr.description}</p>
            <p> Caste: {curr.cast}</p>

            <p>{curr.genre}</p>

            <a href={curr.watch_url} target="_blank">
              <button>Watch now</button>
            </a>
            {/* <button>{ age>=18 ? "Watch now" : "not available"}</button> */}
            {/* <button>{canWatch}</button> */}
    
        </li>);
      })}
    </ul>
  );
};

export const Footer = () => {
  return <p> CopyRights@RashidALi</p>;
};

// export default NetflixCards; it is default export manner
// other is named export which is written with function. and while importing we put it in {}

//attributes -probs
//hot module replacement-quickly changes on screeen when we save file

//   if (age<=18){

//      return (
//     <div>
//       <div>
//         <img src="narcos.jpg" width="25%" height="25%" />
//       </div>

//       <h1>{name}</h1>
//       <h2> Ratings: {5.3-1}</h2>
//       <p>{summary}</p>

//       <p> Genre: {returnGenre()}</p>
//       <button>Not Available</button>
//     </div>
//   );

//   }

// export const NetflixCards = () => {
//   return (
//     <div>
//       <div>
//         <img src="narcos.jpg" width="25%" height="25%" />
//       </div>

//       <h1>Narcos Series</h1>
//       <h2> Ratings: 4.8</h2>
//       <p>
//         this is one the best series to be watched. Character in these movies are
//         the best ones! Must Watch this
//       </p>
//     </div>
//   );
// };
