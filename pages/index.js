function Index() {
  return (
    <div className="max-w-screen-xl m-auto py-5">
      <div className="shadow-md rounded-lg border p-5 flex justify-between items-center">
        <div>
          <span className="text-2xl text-green-600 font-semibold">N</span>
          <span className="text-xl">
            otifila
          </span>
        </div>
        <div className="navigators">
          <a className="px-5 hover:text-green-600 text-green-600 font-medium" href="#">Subscribers</a>
          <a className="px-5 hover:text-green-600" href="#">Group</a>
          <a className="px-5 hover:text-green-600" href="#">Scheduled job</a>
        </div>
      </div>
    </div>
  )
}

export default Index
