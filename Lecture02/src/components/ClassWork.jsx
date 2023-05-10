import React from 'react';

const ClassWork = () => {
  const fullName = '   swarniM Paudyal   ';
  const fullNameCaps = fullName.toUpperCase();
  const fullNameLower = fullName.toLowerCase();
  const trimmedVersion = fullName.trim();
  const preTrimmed = fullName.trimStart();
  const postTrimmed = fullName.trimEnd();
  const fullNameLength = fullName.length;
  const fullNameIncludes = fullName.includes('ia');
  const fullNameReplaced = fullName.replace('M', 'm');

  return (
    <div>
      <div>
        <h1> String Methods </h1>
        <span>FullName: {fullName}</span>
        <br />
        <span>FullName Caps: {fullNameCaps}</span>
        <br />
        <span>FullName LowerCase : {fullNameLower} </span>
        <br />
        <span>Trimmed Version : {trimmedVersion} </span>
        <br />
        <span>Pre Trimmed : {preTrimmed} </span>
        <br />
        <span>Post Trimmed : {postTrimmed} </span>
        <br />
        <span>FullName Length : {fullNameLength} </span>
        <br />
        <span>Includes : Check Console</span>
        <br />
        <span>
          Replace{`('M','m')`}: {fullNameReplaced}
        </span>
      </div>
    </div>
  );
};

export default ClassWork;
