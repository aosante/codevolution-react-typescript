type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = ({ isLoggedIn, messageCount, name }: GreetProps) => {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome ${name}! You have ${messageCount} unread messages`
          : 'Welcome Guest'}
      </h2>
    </div>
  );
};
