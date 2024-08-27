import Link from "next/link";
import dbConnect from "../lib/dbConnect";
import Pet from "../models/Pet";

// TODO: Import Hours component
import Hours from '../components/Hours';

const Index = ({ pets }) => {
  return (
    <>
      {/* TODO: Display Hours component */}
      <Hours />

      {/* Crear una tarjeta para cada mascota */}
      {pets.map((pet) => (
        <div key={pet._id}>
          <div className="card">
            <img src={pet.image_url} />
            <h5 className="pet-name">{pet.name}</h5>
            <div className="main-content">
              <p className="pet-name">{pet.name}</p>
              <p className="owner">Owner: {pet.owner_name}</p>

              {/* Información extra de la mascota: Gustos y disgustos */}
              <div className="likes info">
                <p className="label">Likes</p>
                <ul>
                  {pet.likes.map((data, index) => (
                    <li key={index}>{data} </li>
                  ))}
                </ul>
              </div>
              <div className="dislikes info">
                <p className="label">Dislikes</p>
                <ul>
                  {pet.dislikes.map((data, index) => (
                    <li key={index}>{data} </li>
                  ))}
                </ul>
              </div>

              <div className="btn-container">
                <Link href="/[id]/edit" as={`/${pet._id}/edit`}>
                  <button className="btn edit">Edit</button>
                </Link>
                <Link href="/[id]" as={`/${pet._id}`}>
                  <button className="btn view">View</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

/* Recupera los datos de las mascotas desde la base de datos de MongoDB */
export async function getServerSideProps() {
  await dbConnect();

  /* Encuentra todos los datos en nuestra base de datos */
  const result = await Pet.find({});
  const pets = result.map((doc) => {
    const pet = doc.toObject();
    pet._id = pet._id.toString();
    return pet;
  });

  return { props: { pets: pets } };
}

export default Index;