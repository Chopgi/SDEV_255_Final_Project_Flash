function CourseIndex(){
  return(
    <>
      <title>Course Index</title>

      <div class="row" style="height: 100px;">
          <div class="col-sm-9 p-3 bg-secondary text-white text-center fs-1">Lorem Ipsum School of Placeholder</div>
          <div class="col-sm-3 p-3 bg-info text-dark fs-3">Welcome, user!
            <a href="login.html" class="btn btn-warning">Sign Out</a>
          </div>
      </div>

      <div class="container p-5 my-5 bg-secondary text-white text-center">
        <h1>Course Index</h1>
        <form class="d-flex">
            <input class="form-control me-2" type="text" placeholder="Search" />
            <button class="btn btn-info" type="button">Search</button>
        </form>    
      </div>
      
      <div class="container p-5 my-5 border bg-info">
        <div class="container mt-3">
          <div class="card">
            <div class="card-header">Course Number: LI101</div>
            <div class="card-body">Course Name: Intro to Lorem Ipsum</div> 
            <div class="card-body">Subject: Lorem Ipsum</div> 
            <div class="card-body">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore laborum eligendi consectetur nihil perferendis laudantium nesciunt enim totam porro placeat odio similique modi est reiciendis error, aliquid architecto culpa.</div> 
            <div class="card-footer">Credit Hours: 3</div>
          </div>
        </div>

        <div class="container mt-3">
          <div class="card">
            <div class="card-header">Course Number: LI201</div>
            <div class="card-body">Course Name: Advanced Lorem Ipsum</div> 
            <div class="card-body">Subject:Lorem Ipsum</div> 
            <div class="card-body">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut dignissimos itaque, optio sed cumque necessitatibus earum rerum nobis id explicabo reprehenderit accusantium expedita beatae provident error nulla! Dolorum, rerum!</div> 
            <div class="card-footer">Credit Hours: 3</div>
          </div>
        </div>
      </div>

      <div class="row" style="height: 100px;">
        <div class="col-sm-12 p-3 bg-secondary text-warning text-center fs-6">Copyright</div>
      </div>
    </>
  )};
  export default CourseIndex;