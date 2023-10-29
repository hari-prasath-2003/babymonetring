export default async function get(url) {
  try {
    // make api call to server
    const res = await fetch(url, {
      credentials: "include",
    });

    // all 400 and 500 range request are error for 500 server will return like this {success:false,message :"error msg"}
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message);
    }
    //if no error the json is {success:true,data:data}
    return await res.json();
  } catch (error) {
    // it can be network error fail or can be error throwed by server like the 500 i mentioned
    throw new Error(error.message);
  }
}
