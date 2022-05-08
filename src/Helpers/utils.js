
export const sort_json=(json)=>{
    const time_to_int=(string)=>{
      const s=string.split('/')
      const new_s=s[2]+s[0]+s[1]
      return parseInt(new_s)
    }
    json.sort((a,b)=>time_to_int(b.creat_time)-time_to_int(a.creat_time))
    return json
  }

  export const blog_id_to_blog=(json,file_name)=>{
    var blog=json.filter(function (i){return i.file_name===file_name});
    return blog;
  }