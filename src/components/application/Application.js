export const Application = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label htmlFor="job-location">Job Location</label>
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
  );
};