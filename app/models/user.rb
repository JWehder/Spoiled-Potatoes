class User < ApplicationRecord
    has_many :reviews
    has_many :movies, through: :reviews

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :password, length: { minimum: 8 }, format: { with: /\A(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[[:^alnum:]])/x }
    validates :email, presence: true,
        format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i },
        uniqueness: { case_sensitive: false } 
    validates :password_confirmation, presence: true
    validates :favorite_movie, presence: true
    validates :bio, presence: true, length: { minimum: 50 }

end
