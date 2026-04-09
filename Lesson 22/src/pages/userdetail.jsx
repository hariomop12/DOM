import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetail() {
  const { userId } = useParams();  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div className="p-8">Loading user details...</div>;
  if (!user) return <div className="p-8">User not found</div>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <Link to="/users" className="text-blue-500 mb-4 inline-block">
        ← Back to Users
      </Link>

      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-blue-600">{user.name}</h1>
        <div className="mt-4 space-y-2">
          <p>
            <strong>📧 Email:</strong> {user.email}
          </p>
          <p>
            <strong>📞 Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>🌐 Website:</strong> {user.website}
          </p>
          <p>
            <strong>🏢 Company:</strong> {user.company.name}
          </p>
          <p>
            <strong>🏙️ City:</strong> {user.address.city}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
