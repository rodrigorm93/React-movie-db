import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true); //es para hacer la referencia cuando el componente esta vivo o sigue mosntado
  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setstate({ data: null, loading: true, error: null });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setstate({
            loading: false,
            error: false,
            data,
          });
        } else {
          console.log("Setstate no se llamo");
        }
      })
      .catch(() => {
        setstate({
          loading: false,
          error: "No se pudo cargar la info",
          data: null,
        });
      });
  }, [url]);

  return state;
};
