interface Params {
  slug: string;
  [key: string]: any;
}

interface SearchParams {
  [key: string]: any;
}

interface Parent {
  [key: string]: any;
}

export const generateMetadata = (
  { params, searchParams }: { params: Params; searchParams: SearchParams },
  parent: Parent
) => {
  console.log("metadata", params);
  return {
    title: `Producto tipo: ${params.slug}`,
  };
};
