import { useState, useEffect } from "react";

export default function useMounted() {
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return mount;
}
