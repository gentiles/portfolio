import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "c85pg4fhgiep",
  environment: "master",
  accessToken: "yh-_Dj4pWkmH38i79gMGU4asIGTeLlRJt4fWex8AdIU",
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "portFolioProject",
      });
      const projects = response.items.map((item) => {
        const { title, url, img, text, github } = item.fields;
        const id = item.sys.id;
        const image = img?.fields?.file?.url;
        console.log(item);
        return { title, text, url, image, id, github };
      });

      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log("Error Fetch projects", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { projects, loading };
};
export default useFetchProjects;
