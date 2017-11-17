function IcebreakerResponse(email){
  this.email = email
  function User(name, email){
  this.name = name
  this.email = email
}
 
IcebreakerResponse.BatchCreate = function(data){
  return data.map(function(icebreakerResponseData){
    return new IcebreakerResponse(icebreakerResponseData[0], icebreakerResponseData[1])
  })
}


