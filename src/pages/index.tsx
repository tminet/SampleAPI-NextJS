import Link from "next/link"

function Page() {
  return (
    <div className="container">
      <h1>Sample API - Next JS</h1>
      <h2>routes:</h2>
      <div className="simple-box">
        <span>
          <b>get: </b>
        </span>
        <Link href="/api/v1/users">
          <a>/api/v1/users</a>
        </Link>
        <p>Parameters:</p>
        <span>
          <b>limit</b> - Type: Int - Optional - Description: Limit of results
          set, default is 4
        </span>
        <br />
        <span>
          <b>page</b> - Type: Int - Optional - Description: Current page,
          default is 0
        </span>
      </div>
      <div className="simple-box">
        <span>
          <b>get: </b>
        </span>
        <Link href="/api/v1/users/6194f69d90b0772151099b28">
          <a>/api/v1/users/&#123;id&#125;</a>
        </Link>
        <p>Parameters:</p>
        <span>
          <b>id</b> - Type: String - Required - Description: User ID
        </span>
      </div>
    </div>
  )
}

export default Page
