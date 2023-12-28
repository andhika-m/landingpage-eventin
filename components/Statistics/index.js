import React from 'react';

export default function Statistics() {
  return (
    <section className='statistics container'>
      <div className='d-flex flex-row flex-wrap justify-content-center align-items-center gap-5'>
        <div className='d-flex flex-column align-items-center gap-1'>
          <div className='title'>10rb</div>
          <p>Events Created</p>
        </div>
        <div className='vr'></div>
        <div className='d-flex flex-column align-items-center gap-1'>
          <div className='title'>4jt</div>
          <p>People Joined</p>
        </div>
        <div className='vr d-none d-md-block'></div>
        <div className='d-flex flex-column align-items-center gap-1'>
          <div className='title'>550</div>
          <p>Success Startup</p>
        </div>
        <div className='vr'></div>
        <div className='d-flex flex-column align-items-center gap-1'>
          <div className='title'>5rb</div>
          <p>Top Speakers</p>
        </div>
      </div>
    </section>
  );
}
