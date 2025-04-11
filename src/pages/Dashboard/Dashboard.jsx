const Dashboard = () => {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Welcome to your private area! 🎉</h1>
        <button
          onClick={() => {
            localStorage.removeItem('auth')
            window.location.href = '/'
          }}
        >
          Logout
        </button>
      </div>
    )
  }
  
  export default Dashboard