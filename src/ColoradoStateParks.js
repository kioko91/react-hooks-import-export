import React from "react";
import howMuchParks from "./parks/howManyParks";

function ColoradoStateParks() {
  howMuchParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}
