function Dashboard() {
  return (
    <div>
      <h2 id="dashboard">Dashboard</h2>
      <p>This is the dashboard page</p>
      <ul>
        <li>
          <a href="#profile">Profile for user 1004</a>
        </li>
        <li>
          <a href="#settings">Settings</a>
        </li>
      </ul>

      <div>
        <h3 id="profile">Profile</h3>
        <p>This is the Profile page for user 1004</p>
      </div>

      <div>
        <h3>Settings</h3>
        <p>This is the Settings page</p>
      </div>
    </div>
  );
}
export default Dashboard;
