import { useState, useEffect } from "react";

//recibira la url donde habra que hacer el fetch y las opciones
export function useFetch2(url, setPagination) {
  const [loading, setLoading] = useState(true); //loading : nos indicara si esta haciendo la peticin o ya ha acabado
  const [result, setResult] = useState(null); //result: para guardar el resultado
  const [error, setError] = useState(null); // error: por si nera un error

  //vamos hacer la peticion

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json(); //el resultado los tranfromamos a un json
        setResult(json); //guardamos el json en el resultado
        setLoading(false); // le diremos que ya acabdo de cargar
        setPagination(json.total_pages);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [url]); //son las variables que queremos utilizar,le diremos que cuando se actualice el option y el url se actualizara todo los de arriba(se volvera a ejecutar el useEffect )

  return { loading, result, error };
}
