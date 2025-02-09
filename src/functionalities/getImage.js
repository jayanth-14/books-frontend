const getImage = (image) => {
  const type = typeof(image.data);
  if (type === "object") {
    return "data:image/jpeg;base64," + btoa(
      new Uint8Array(image.data.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ''
      )
    )
  }  
  return "data:image/jpeg;base64," + image.data;
}

export default getImage;