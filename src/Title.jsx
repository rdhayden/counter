import { LIMIT } from './constants';

export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          Limit! Buy <b>Pro</b> for &gt;{LIMIT}
        </span>
      ) : (
        'Count'
      )}
    </h1>
  );
}
