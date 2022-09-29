export const Application = () => {
  return (
    <>
      <h1>Job description Form</h1>
      <h2>section 1</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Full Name" />
        </div>
        <p>All fields are mandatory</p>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value="">--select country--</option>
            <option value="US">USA</option>
            <option value="IND">India</option>
            <option value="CA">canada</option>
            <option value="AU">australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agree
          </label>
        </div>
        <button>submit</button>
      </form>
    </>
  );
};
