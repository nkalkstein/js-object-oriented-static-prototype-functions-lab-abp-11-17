function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(data){
  return data.map(function(icebreakerResponseData){
    return new IcebreakerResponse(icebreakerResponseData[0])
  })
}
