class AddResetPasswordCodeAndRequestTimeToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :code, :string
    add_column :users, :request_time, :datetime
  end
end
