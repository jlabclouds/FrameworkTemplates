const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 40,
};

export default function Profile() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <input
        type="text"
        placeholder="Search..."
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          marginRight: '10px',
        }}
      />
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: '50%',
        }}
      />
    </div>
  );
}
