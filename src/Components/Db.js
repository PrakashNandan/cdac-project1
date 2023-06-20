import React from 'react'

function Db() {
  return (
    <div>
      
  <div class="container-fluid">
    <div class="row">
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
         
        </div>
      </nav>

      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Dashboard</h1>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="card mb-4">
              <div class="card-header">
                <h5 class="card-title">Total Users</h5>
              </div>
              <div class="card-body">
                <h2 class="card-text">250</h2>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-4">
              <div class="card-header">
                <h5 class="card-title">Total Orders</h5>
              </div>
              <div class="card-body">
                <h2 class="card-text">500</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Recent Orders</h5>
              </div>
              <div class="card-body">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>001</td>
                      <td>John Doe</td>
                      <td>2023-06-19</td>
                      <td><span class="badge badge-success">Completed</span></td>
                    </tr>
                    <tr>
                      <td>002</td>
                      <td>Jane Smith</td>
                      <td>2023-06-18</td>
                      <td><span class="badge badge-warning">Pending</span></td>
                    </tr>
                    <tr>
                      <td>003</td>
                      <td>Michael Johnson</td>
                      <td>2023-06-17</td>
                      <td><span class="badge badge-primary">Processing</span></td>
                    </tr>
                    <tr>
                      <td>004</td>
                      <td>Emily Davis</td>
                      <td>2023-06-16</td>
                      <td><span class="badge badge-danger">Cancelled</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  </div>
    </div>
  )
}

export default Db
