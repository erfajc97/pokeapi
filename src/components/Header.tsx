import PokeballIcom from "@/assets/svg/PokeballIcom";

const Header = () => {
  // img de portada
  const imgPortadaStyle = {
    backgroundImage: `url('/portadaPokemon.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      style={imgPortadaStyle}
      className="lg:h-[300px] h-[180px] flex lg:items-center items-end justify-center gap-x-2"
    >
      <h1 className="lg:text-4xl text-xl font-bold text-white text-center ">
        
        POKE API MUTA
      </h1>
      <PokeballIcom height={50} width={50} />
    </div>
  );
};

export default Header;
