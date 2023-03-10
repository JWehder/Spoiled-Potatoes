class PasswordResetMailer < ApplicationMailer
    default :from => "ejwehder@gmail.com"

    def password_reset(user)
        @user = user
        @code = generate_password_code
        mail(:to => user.email, :subject => "Forgot your Password")
    end

    def generate_password_code
        # create a code using SecureRandom
        # update the column in the DB for the user's password reset
        code = SecureRandom.hex(6)

        @user.update(password_reset_code: code)
        @user.update(request_time: Time.now.utc)
        code
    end

end
